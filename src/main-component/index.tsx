// App
import React, { useEffect, useState } from "react";
import {
  useNavigate,
  useSearchParams,
  createSearchParams,
} from "react-router-dom";
import AllContacts from "../pages/AllCountriesContacts";
import UsContacts from "../pages/UsContacts";
import { ModalState } from "../utils/interface/modal.interface";

const PastorsLine = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  // Create state with the correct type
  const [isModalOpen, setIsModalOpen] = useState<ModalState | null>(null);

  // Open modal based on URL
  useEffect(() => {
    setIsModalOpen({ show: true, type:  searchParams.get("modal") ?? "" });
  }, [searchParams]);

  const openModal = (type: string) => {
    navigate({ search: `?${createSearchParams({ modal: type })}` });
    setIsModalOpen({ show: true, type });
  };

  const closeModal = () => {
    navigate({ search: "" });
    setIsModalOpen(null);
  };

  return (
    <React.Fragment>
      <div className="d-flex justify-content-center align-items-center h-full">
        <button
          className="btn button-primary mx-1 px-4 py-2"
          onClick={() => openModal("all")}
        >
          Button A
        </button>

        <button
          className="btn button-secondary mx-1 px-4 py-2"
          onClick={() => openModal("us")}
        >
          Button B
        </button>

        {isModalOpen?.show && isModalOpen.type === "all" && (
          <AllContacts closeModal={closeModal} openModal={openModal} />
        )}
        {isModalOpen?.show && isModalOpen.type === "us" && (
          <UsContacts closeModal={closeModal} openModal={openModal} />
        )}
      </div>
    </React.Fragment>
  );
};

export default PastorsLine;
