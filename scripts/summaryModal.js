// ES6 module

import $ from "bootstrap";

function showSummaryModal(text) {
  var modalWindow = $("#snippetModal");
  modalWindow.find(".modal-body").html(unescape(text));
  modalWindow.modal("show");
}

export {showSummaryModal};