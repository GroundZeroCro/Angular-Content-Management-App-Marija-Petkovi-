class ItemContent {

  panelOpenState = false;
  isEditMode = false;

  changeEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  setPanelState(isOpen: boolean) {
    this.panelOpenState = isOpen;

    if (this.isEditMode && !isOpen) {
      this.isEditMode = false;
    }
  }
}

export default ItemContent;
