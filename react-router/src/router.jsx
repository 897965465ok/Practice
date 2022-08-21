import { useRoutes } from 'react-router-dom';
import User from './pages/User';
import Info from './pages/Info';
import App from "./App"
// root.render(<BrowserRouter>
//   <Routes>
//     <Route path="/" element={<App />} >
//       <Route path="expenses" element={<Expenses />} />
//       <Route path="invoices" element={<Invoices />} />
//       <Route
//         path="*"
//         element={
//           <main style={{ padding: "1rem" }}>
//             <p>There's nothing here!</p>
//           </main>
//         }
//       />
//     </Route>
//   </Routes>
// </BrowserRouter>);

export const routes = [
    {
        path: '/',
        element: <App />,
        meta: {
            name: "首页"
        },
        children: [{
            path: '/user/:id',
            meta: {
                name: "user"
            },
            element: <User />

        }, {
            path: '/info',
            meta: {
                name:"info"
            },
            element: <Info />
        }]
    }

];
const Routes = () => (
    useRoutes(routes)
)
export default Routes;
