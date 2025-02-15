"use client";
import React from "react";
import { Modal, ModalBody, ModalTrigger } from "./ui/animated-modal";

import { ContactForm } from "./Form";
import { Button } from "./ui/moving-border";

export function FormModal() {
  return (
    <div className="py-2 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="bg-[#020617] dark:text-black text-white flex justify-center group/modal-btn">
          <Button className="text-lg">Contact Us</Button>
        </ModalTrigger>
        <ModalBody>
          <ContactForm />
        </ModalBody>
      </Modal>
    </div>
  );
}
