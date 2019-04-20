const StorageCtrl = (()=> {
    const storeItem = (newItem) => {
        let items = localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items'));
        items.push(newItem)
        localStorage.setItem('items', JSON.stringify(items))
    }

    const getItemsFromStorage = () => {
        return localStorage.getItem('items') === null ? [] : JSON.parse(localStorage.getItem('items'))
    }

    const updateItemStorage = (itemUpdate) => {
        let items = JSON.parse(localStorage.getItem('items'))
        items.forEach((item, i) => {
            if (itemUpdate.id === item.id) {
                items.splice(i, 1, itemUpdate)
            }
        });
        localStorage.setItem('items', JSON.stringify(items))
    }

    const deleteItemStorage = (id) => {
        let items = JSON.parse(localStorage.getItem('items'))
        items.forEach((item, i) => {
            if (id === item.id) {
                items.splice(i, 1)
            }
        });
        localStorage.setItem('items', JSON.stringify(items))
    }

    const clearItemStorage = (id) => {
        localStorage.removeItem('items')
    }

    return { storeItem, getItemsFromStorage, updateItemStorage, deleteItemStorage, clearItemStorage }
})()


const ItemCtrl = ((StorageCtrl) => {
    const Item = function(id, name, colories){
        this.id = id;
        this.name = name;
        this.colories = colories;
    }
    
    const data = {
        items : StorageCtrl.getItemsFromStorage(),
        currentItem : null,
        totalColories : 0
    }

    const getItems = () => {
        return data.items
    }

    const getTotalColories = () => {
        let total = 0
        data.items.forEach(item => {
            total+= item.colories
        });
        data.totalColories = total
        return data.totalColories
    }

    const addItem = (name, colories) => {
        if (data.items.length > 0) {
            var id = data.items[data.items.length - 1].id + 1
        }else{
            var id = 0
        }
        var colories = parseInt(colories)

        newItem = new Item(id, name, colories)
        data.items.push(newItem)
        return newItem;
    }

    const getItemById = (id) => {
        let found = null;
        data.items.forEach(item => {
            if (item.id === id) {
                found = item
            }
        });
        return found
    }

    const setCurrentItem = (item) => {
        data.currentItem = item
    }

    const getCurrentItem = () => {
        return data.currentItem;
    }

    const updateItem = (name, colories) => {
        colories = parseInt(colories)
        let found = null
        data.items.forEach(item => {
            if (item.id === data.currentItem.id) {
                item.name = name
                item.colories = colories
                found = item
            }
        });
        return found
    }

    const deleteItem = (id) => {
        data.items.forEach((item, i) => {
            if (item.id === id) {
                data.items.splice(i,1)
            }
        });
    }
    const clearAllItems = () => {
        data.items = [],
        data.currentItem = null,
        data.totalColories = 0
    }
    
    return { getItems, addItem, getTotalColories, getItemById, setCurrentItem, getCurrentItem, updateItem, deleteItem, clearAllItems }
})(StorageCtrl)


const UICtrl = (() => {
    const UISelectors = {
        itemList : '#item-list',
        listItems : '#item-list li',
        addBtn : '.add-btn',
        updateBtn : '.update-btn',
        deleteBtn : '.delete-btn',
        backBtn : '.back-btn',
        clearBtn : '.clear-btn',
        itemNameInput : '#item-name',
        itemNameColories : '#item-calories',
        totalColories : '.total-calories',
    }

    const populateItemList = (items) => {
        let html = '';
        items.forEach(item => {
            html += `<li class="collection-item" id="item-${item.id}">
                        <strong>${item.name}: </strong> <em>${item.colories} Calories</em>
                        <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                        </a>
                    </li>`
        });
        document.querySelector(UISelectors.itemList).innerHTML = html
    }

    const addListItem = (item) => {
        const li = document.createElement('li')
        li.className = 'collection-item'
        li.id = `item-${item.id}`
        li.innerHTML = `<strong>${item.name}: </strong> <em>${item.colories} Calories</em>
                        <a href="#" class="secondary-content">
                            <i class="edit-item fa fa-pencil"></i>
                        </a>`;
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
        UICtrl.showList();
    }

    const updateListItem = (item) => {
        let listItems = document.querySelectorAll(UISelectors.listItems)
        let listItemsArr = Array.from(listItems)
        listItemsArr.forEach(listItem => {
            let itemID = listItem.getAttribute('id')
            if (itemID === `item-${item.id}`) {
                document.querySelector(`#${itemID}`).innerHTML = `
                    <strong>${item.name}: </strong> <em>${item.colories} Calories</em>
                    <a href="#" class="secondary-content">
                        <i class="edit-item fa fa-pencil"></i>
                    </a>`
            }
        });
    }

    const deleteListItem = (id) => {
        document.querySelector(`#item-${id}`).remove()
    }

    const clearAllItems = () => {
        document.querySelector(UISelectors.itemList).innerHTML = ''
        UICtrl.hideList()
    }
     
    const clearInputs = () => {
        document.querySelector(UISelectors.itemNameInput).value = ''
        document.querySelector(UISelectors.itemNameColories).value = ''
    }

    const getItemInput = () => {
        return {
            name : document.querySelector(UISelectors.itemNameInput).value,
            colories : document.querySelector(UISelectors.itemNameColories).value,
        }
    }

    const showList = () => {
        document.querySelector(UISelectors.itemList).style.display = 'block'
    }

    const hideList = () => {
        document.querySelector(UISelectors.itemList).style.display = 'none'
    }

    const showTotalColories = (total) => {
        document.querySelector(UISelectors.totalColories).textContent = total
    }

    const addItemToForm = () => {
        document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name
        document.querySelector(UISelectors.itemNameColories).value = ItemCtrl.getCurrentItem().colories
    }

    const clearEditState = () => {
        UICtrl.clearInputs()
        document.querySelector(UISelectors.updateBtn).style.display = 'none'
        document.querySelector(UISelectors.deleteBtn).style.display = 'none'
        document.querySelector(UISelectors.backBtn).style.display = 'none'
        document.querySelector(UISelectors.addBtn).style.display = 'inline'
    }

    const showEditState = () => {
        document.querySelector(UISelectors.updateBtn).style.display = 'inline'
        document.querySelector(UISelectors.deleteBtn).style.display = 'inline'
        document.querySelector(UISelectors.backBtn).style.display = 'inline'
        document.querySelector(UISelectors.addBtn).style.display = 'none'
    }

    return { populateItemList, UISelectors, getItemInput, addListItem, clearInputs, hideList, showList, showTotalColories, clearEditState, addItemToForm, showEditState, updateListItem, deleteListItem, clearAllItems }
})()


const AppCtrl = ((ItemCtrl, UICtrl, StorageCtrl) => {
    const loadEventListeners = () => {
        document.querySelector(UICtrl.UISelectors.addBtn).addEventListener('click', itemAddSubmit)
        document.addEventListener('keypress', function (e) {
            if (e.keyCode === 13 || e.which === 13) {
                e.preventDefault()
                return false;
            }
        })
        document.querySelector(UICtrl.UISelectors.itemList).addEventListener('click', itemEditClick)
        document.querySelector(UICtrl.UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit)
        document.querySelector(UICtrl.UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit)
        document.querySelector(UICtrl.UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState)
        document.querySelector(UICtrl.UISelectors.clearBtn).addEventListener('click', clearAllItems)
    }

    const itemAddSubmit = (e) => {
        e.preventDefault()
        let input = UICtrl.getItemInput()
        if (input.name != '' && input.colories) {
            const newItem = ItemCtrl.addItem(input.name, input.colories)
            UICtrl.addListItem(newItem)
            const totalColories = ItemCtrl.getTotalColories()
            UICtrl.showTotalColories(totalColories)
            StorageCtrl.storeItem(newItem)
            UICtrl.clearInputs()
        }
    }

    const itemEditClick = (e) => {
        e.preventDefault()
        if (e.target.classList.contains('edit-item')) {
            const listId = e.target.parentNode.parentNode.id
            const listIdArr = listId.split('-')
            const id = parseInt(listIdArr[1])
            const itemToEdit = ItemCtrl.getItemById(id)
            ItemCtrl.setCurrentItem(itemToEdit)
            UICtrl.addItemToForm()
            UICtrl.showEditState()
        }
    }

    const itemUpdateSubmit = (e) => {
        e.preventDefault()
        const input = UICtrl.getItemInput()
        const updateItem = ItemCtrl.updateItem(input.name, input.colories)
        UICtrl.updateListItem(updateItem)
        const totalColories = ItemCtrl.getTotalColories()
        UICtrl.showTotalColories(totalColories)
        StorageCtrl.updateItemStorage(updateItem)
        UICtrl.clearEditState()
    }

    const itemDeleteSubmit = (e) => {
        e.preventDefault()
        const currentItem = ItemCtrl.getCurrentItem()
        ItemCtrl.deleteItem(currentItem.id)
        UICtrl.deleteListItem(currentItem.id)
        const totalColories = ItemCtrl.getTotalColories()
        UICtrl.showTotalColories(totalColories)
        StorageCtrl.deleteItemStorage(currentItem.id)
        UICtrl.clearEditState()
    }

    const clearAllItems = () => {
        ItemCtrl.clearAllItems()
        UICtrl.clearAllItems()
        StorageCtrl.clearItemStorage()
        const totalColories = ItemCtrl.getTotalColories()
        UICtrl.showTotalColories(totalColories)
    }


    const items = ItemCtrl.getItems()

    const init = function() {
        UICtrl.clearEditState()
        if (items.length === 0) {
            UICtrl.hideList()
        } else {
            UICtrl.populateItemList(items)
            UICtrl.showList()
        }
        const totalColories = ItemCtrl.getTotalColories()
        UICtrl.showTotalColories(totalColories)
        loadEventListeners()
    }

    return { init }
})(ItemCtrl, UICtrl, StorageCtrl)


AppCtrl.init()