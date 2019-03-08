import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom'


const App = () => (
    <Router>
        <Switch>
            <Route exact path='/' render={() => <div> Home </div>} />
            <Route path='/search' render={() => <div> Search </div>} />
            <Route render={() => <div> Page not found... </div>} />
        </Switch>
    </Router>
// <Container>
//     {({searchVal, onSearchChange, articles}) => 
//         <Autocomplete
//             searchVal={searchVal}
//             onSearchChange={onSearchChange}
//             articles={articles}
//         />
//     }
// </Container>
)

export default App
