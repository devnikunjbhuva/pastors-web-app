// Contacts
import React, { useRef, useState } from "react";
import { Scrollbars } from "react-custom-scrollbars";
import ViewContactDetails from "./ContactDetails";
import { ContactsProps } from "../utils/interface/contacts.interface";
import { getName } from "../utils/common-functions";
import { ModalState } from "../utils/interface/modal.interface";
import { ContactData } from "../utils/interface/contact.interface";

const Contacts: React.FC<ContactsProps> = ({
  handleScroll,
  isLoading,
  isShowEven,
  contacts,
}) => {
  const scrollRef = useRef<Scrollbars | null>(null);

  // Create state with the correct type
  const [isModalOpen, setIsModalOpen] = useState<ModalState | null>(null);

  const onScroll = () => {
    if (scrollRef.current) {
      const getScrollHeight = scrollRef.current.getScrollHeight();
      const getScrollTop = scrollRef.current.getScrollTop();
      const getClientHeight = scrollRef.current.getClientHeight();

      handleScroll(getScrollHeight, getScrollTop, getClientHeight);
    }
  };

  return (
    <React.Fragment>
      <Scrollbars
        ref={scrollRef}
        style={{ height: 500, width: "100%" }}
        onScrollStop={onScroll}
      >
        <table className="table table-striped">
          <thead className="thead-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {!isLoading ? (
              <>
                {contacts?.length > 0 ? (
                  contacts?.map((contact) => {
                    return (
                      (isShowEven ? contact.id % 2 === 0 : true) && (
                        <tr key={contact.id}>
                          <td className="align-middle"> {contact?.id} </td>
                          <td className="align-middle">{getName(contact)}</td>
                          <td className="align-middle"> {contact?.email} </td>
                          <td className="align-middle">
                            {contact?.phone_number}
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-primary"
                              onClick={() =>
                                setIsModalOpen({ show: true, data: contact })
                              }
                            >
                              View
                            </button>
                          </td>
                        </tr>
                      )
                    );
                  })
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center">
                      No Data Found.
                    </td>
                  </tr>
                )}
              </>
            ) : (
              <tr>
                <td colSpan={5}>
                  <div className="spinner-position">
                    <div
                      className="spinner-border text-info "
                      role="status"
                    ></div>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </Scrollbars>

      {/* Contact Details modal */}
      {isModalOpen && (
        <ViewContactDetails
          closeModal={() => setIsModalOpen(null)}
          data={isModalOpen?.data as ContactData}
        />
      )}
    </React.Fragment>
  );
};

export default Contacts;
