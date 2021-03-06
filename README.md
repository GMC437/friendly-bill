## Friendly Bill

### Get Started
1. Install dependencies via `yarn` (or `npm`)
1. Run `yarn start` to start the dev server
1. Run `yarn api` in a different terminal to start the json-api server

### The Task
1. Create a Tabs component that allows multiple pages to be switched between.
1. One tab should show a list of bills. These can be found at http://localhost:3002/bills/. Bills have a flag `isBill` set to `true`.
1. Another tab should show a list of transactions which are potential bills. These can also be found at http://localhost:3000/bills/. Potential bills have a flag `isBill` set to `false`.
1. Under each bill row for both lists, should be a hidden list of transactions for that bill. This should show when the bill row is clicked.
1. Under the name of each bill should show a count of the transactions for it
1. Add an action to the bills tab for each bill called "remove bill" which updates the relevant bill's `isBill` flag to `false`. You can use a `PATCH` request to `http://localhost:3000/bills/:id` using the id of the bill to update the bill resource.
1. Add an action to the potential bills tab for each potential bill called "Add as bill" which updates the relevant bill's `isBill` flag to `true`.
1. After each action, the lists should reflect the changes.

### Option
Option 2 with 4 hours
## Notes if I had more time
update isBill with patch to persist on refresh
created more unit tests for components and logic
styled accordionChild
used a loader component for a better experience
update the user with error messages
add filters  
add sorting 
add average transaction amount, min transaction amount, max transaction amount to accordion

### File Structure
    src
        actions
        components
            page
                HomePage
                BillsPage
                ExpensesPage
            router
                RouterBody
                RouterNav
            ui
                ProgressLoader
                AccordionParent
                AccordionChild
                IsBillButton
                BillBar
        helpers
        reducers
        sagas
        shared

### State Management

## Actions
* IS\_BILL
* FETCH\_USER\_DATA
* FETCH\_USER\_DATA\_SAGA
* FETCH\_USER\_DATA\_SUCCESS
* FETCH\_USER\_DATA\_FAILURE

## Store
* bills = []
* categories = []
* loading = { isLoading: true, message: "" }
* news = ""

### Dependcies
* Router: react-router-dom
* State Management: redux + react-redux + redux-saga
* Styling: styled-components
* Tests: jest + enzyme

### Issues
