import React from 'react';
import Button from "antd/lib/button";
import Modal from "antd/lib/modal/Modal";

type CustomModalPT = {
    children: React.ReactNode
    title: string
    isShow: boolean
    showModalHandler: (isShow: boolean) => void
}
export const CustomModal = ({children, title, isShow, showModalHandler}: CustomModalPT) => {

    const showModal = () => {
        showModalHandler(true);
    };
    const handleCancel = () => {
        showModalHandler(false);
    };

    return (
        <div>
            <Button type="primary" onClick={showModal}>
                Add new post
            </Button>
            <Modal
                title={title}
                open={isShow}
                onCancel={handleCancel}
                footer={null}
            >
                {children}
            </Modal>
        </div>
    );
};

