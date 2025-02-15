"use client";
import React from "react";
import { Modal, ModalBody, ModalTrigger } from "./animated-modal";

import { ContactForm } from "../Form";

export function AnimatedModalDemo() {
  return (
    <div className="py-2 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-[#06b6d4] dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Contact Us
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            📞
          </div>
        </ModalTrigger>
        <ModalBody>
          <ContactForm />
        </ModalBody>
      </Modal>
    </div>
  );
}
