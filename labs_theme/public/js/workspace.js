$(document).ready( () => {
    // console.log('jquery Workspace page fully loaded!');
    removeMenuItems();
} )


function workspaceLoaded() {
    // your function code here
    console.log('workspace is loaded....');
}

function removeMenuItems() {
    // debugger;
    // Find the dropdown menu by its ID
    const links = document.querySelectorAll('#toolbar-user a.dropdown-item')

    // Find the "Manage Subscriptions" item by its text content and remove it
    var manageSubsItem = Array.from(links).find((a) => a.innerText.trim() === 'Manage Subscriptions');
    if (manageSubsItem) {
        manageSubsItem.remove();
    }

    // Find the "Toggle Theme" item by its text content and remove it
    var toggleThemeItem = Array.from(links).find((a) => a.innerText.trim() === 'Toggle Theme');
    if (toggleThemeItem) {
        toggleThemeItem.remove();
    }

    // Find the "Toggle Full Width" item by its text content and remove it
    var toggleFullItem = Array.from(links).find((a) => a.innerText.trim() === 'Toggle Full Width');
    if (toggleFullItem) {
        toggleFullItem.remove();
    }    
}


