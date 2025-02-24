const sidebarReducer = (state: any, action: any) => {
  if (action.type === "TOGGLE_SIDEBAR") {
    return {
      ...state,
      isSideBarOpen: !state.isSideBarOpen,
    };
  }

  throw new Error(`No matching ${action.type} action type`);
};

export default sidebarReducer;
