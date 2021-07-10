/**
Author - Brijesh Pandey
Git - https://bitbucket.org/__brijesh/
**/


import React, {useState} from "react";

import {markDone} from "api";

import MarkSuccess from "./MarkSuccess";

import {
  handleApiError,
  getAuthKey,
  triggerToast
} from "utils";

function MarkSuccessContainer({
  id,
  setIsMarkingSuccess,
  getTaskList
}) {
  const [showModal, setShowModal] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const markSuccessHandler = async (id) => {
    let isSuccess = false;
    try {
      setIsLoading(true);
      await markDone(getAuthKey(), id, {"completed": true});
      triggerToast("Marked Done", "success");
      isSuccess = true;
    } catch (error) {
      handleApiError(error);
    } finally {
      setIsLoading(false);
      handleClose();
      if (isSuccess) {
        getTaskList();
      }
    }
  };

  const handleClose = () => {
    setShowModal(false);
    setIsMarkingSuccess(false);
  }

  return (
    <MarkSuccess
      isLoading={isLoading}
      showModal={showModal}
      setShowModal={setShowModal}
      markSuccessHandler={markSuccessHandler}
      handleClose={handleClose}
      id={id}
    />
  )
}

export default MarkSuccessContainer;
