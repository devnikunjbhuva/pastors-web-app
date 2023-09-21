// All Contacts
import React, { useEffect, useState } from "react";
import useDebouncedEffect from "use-debounced-effect";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../redux/slices/contactSlice";
import Contacts from "./Contacts";
import { AllContactsProps } from "../utils/interface/all-countries-contacts.interface";
import { Pagination } from "../utils/constants";
import { Filter } from "../utils/enumeration/filter.enum";
import { handleChanges } from "../utils/common-functions";

const AllContacts = ({ closeModal, openModal }: AllContactsProps) => {
  const { data: contacts, loading: isLoading } = useSelector(
    (state: any) => state.contacts
  );

  const dispatch = useDispatch();
  const [showMoreData, setShowMoreData] = useState<boolean>(false);
  const [contactForm, setContactForm] = useState<{
    isShowEven: boolean;
    search: string;
  }>({
    isShowEven: false,
    search: "",
  });
  const [contactFilters, setContactFilters] = useState<{
    page: number;
    companyId: number;
  }>({
    page: Pagination.page,
    companyId: Filter.companyId,
  });

  // Apply search filter on the delay of 500 miliseconds
  useDebouncedEffect(
    () => {
      setContactFilters((prevFilters) => ({
        ...prevFilters,
        page: 1,
        query: contactForm?.search,
      }));
    },
    500,
    [contactForm?.search]
  );

  useEffect(() => {
    dispatch<any>(fetchContacts(contactFilters));
  }, [contactFilters, dispatch]);

  // Infinite Scroll pagination
  const handleScroll = (
    totalScrollHeight: number,
    scrollTopHeight: number,
    getClientHeight: number
  ) => {
    const nextPage = contactFilters.page + 1;
    if (
      scrollTopHeight + getClientHeight === totalScrollHeight &&
      contactFilters.page !== nextPage
    ) {
      setShowMoreData(false);
      setContactFilters((prev) => ({ ...prev, page: nextPage }));
    }
  };

  return (
    <React.Fragment>
      <Modal show onHide={closeModal} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>
            <h5 className="modal-title">Modal A - All Contacts</h5>
          </Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <div className="d-flex align-items-center justify-content-between mb-4">
            <div className="form-group mb-0 w-50">
              <input
                type="text"
                className="form-control"
                placeholder="Search Contact"
                onChange={(event) =>
                  handleChanges("search", event?.target?.value, setContactForm)
                }
                value={contactForm?.search}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    const inputElement = e.target as HTMLInputElement;
                    setContactFilters((prevFilters) => ({
                      ...prevFilters,
                      query: inputElement.value,
                    }));
                  }
                }}
              />
            </div>

            <button
              className="btn button-secondary mx-1 px-4 py-2"
              onClick={() => openModal("us")}
            >
              US Contacts
            </button>
          </div>

          {/* Contact List */}
          <Contacts
            handleScroll={handleScroll}
            contacts={contacts}
            isShowEven={contactForm?.isShowEven}
            isLoading={isLoading}
          />

          {/* Loader for scrolling */}
          {showMoreData && contacts.length > 0 && (
            <div className="d-flex align-items-center justify-content-center my-2">
              <div className="spinner-border text-primary spinner-sm"> </div>
              <h6 className="ml-3 mb-0">Loading...</h6>
            </div>
          )}
        </Modal.Body>

        <Modal.Footer>
          <div className="d-flex align-items-center justify-content-between w-100">
          <button
              type="button"
              className="btn btn-danger mx-1 px-4 py-2"
              onClick={closeModal}
            >
              Close
            </button>
            <div className="form-check">
              <input
                type="checkbox"
                className="form-check-input"
                value={String(contactForm?.isShowEven)}
                onChange={(event) =>
                  handleChanges(
                    "isShowEven",
                    event?.target?.checked,
                    setContactForm
                  )
                }
                id="showEven"
              />
              <label className="form-check-label" htmlFor="showEven">
                Only even
              </label>
            </div>
           
          </div>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
};

export default AllContacts;
