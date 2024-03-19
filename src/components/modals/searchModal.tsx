import React, { FC } from "react";

import {
  Modal,
  ModalContent,
  ModalBody,
  ModalFooter,
  Button,
  Image,
} from "@nextui-org/react";
import { SearchModalProps } from "@/types";

const SearchModal: FC<SearchModalProps> = ({ isOpen, onClose }) => {
  return (
    <>
      <Modal
        hideCloseButton={true}
        backdrop="blur"
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        classNames={{
          body: "py-6",
          backdrop: "blur",

          base: "border-black bg-dark text-white/75",
          header: "border-b-[1px] border-dark",
          footer: "border-t-[1px] border-dark",
        }}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="flex items-center sm:text-center"></ModalBody>
              <ModalFooter>
                <Button
                  color="default"
                  className="font-orbitron w-[50%] rounded-lg"
                  onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
export default SearchModal;
