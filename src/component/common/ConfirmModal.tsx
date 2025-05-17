import React, { createContext, useContext, useState } from "react";
import Modal from "./Modal";
import Button from "./Button";

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  message?: string;
  title?: string;
  confirmText?: string;
  cancelText?: string;
}

type ConfirmOptions = {
  title?: string;
  message: string;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
};

interface ConfirmContextType {
  confirm: (options: ConfirmOptions) => void;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  message = "Are you sure?",
  title = "Confirm",
  confirmText = "Yes",
  cancelText = "No",
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} title={title}>
      <p className="mb-8">{message}</p>
      <div className="flex justify-end gap-4">
        <Button
          label={cancelText}
          onClick={onClose}
          color="bg-gray-300"
          textColor="text-gray-700"
          type="button"
        />
        <Button
          label={confirmText}
          onClick={() => {
            onConfirm();
            onClose();
          }}
          color="bg-red-600"
          textColor="text-white"
          type="button"
        />
      </div>
    </Modal>
  );
};

const ConfirmContext = createContext<ConfirmContextType | undefined>(undefined);

export const useConfirm = () => {
  const ctx = useContext(ConfirmContext);
  if (!ctx) throw new Error("useConfirm must be used within ConfirmProvider");
  return ctx;
};

export const ConfirmProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ConfirmOptions | null>(null);

  const confirm = (opts: ConfirmOptions) => {
    setOptions(opts);
    setIsOpen(true);
  };

  const handleConfirm = () => {
    options?.onConfirm?.();
    setIsOpen(false);
  };

  return (
    <ConfirmContext.Provider value={{ confirm }}>
      {children}

      <ConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={handleConfirm}
        message={options?.message || ""}
        title={options?.title || "Confirmation"}
        confirmText={options?.confirmText || "Confirm"}
        cancelText={options?.cancelText || "Cancel"}
      />
    </ConfirmContext.Provider>
  );
};

