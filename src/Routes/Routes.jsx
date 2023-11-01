import { Route } from 'react-router-dom';
import { PageOne } from '../Pages/PageOne';
import { PageTwo } from '../Pages/PageTwo';


export const routes = (
    <>
        <Route path="/" element={<PageOne />} />
        <Route path="/" element={<PageTwo />} />


    </>
);
