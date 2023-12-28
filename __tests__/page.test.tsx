import '@testing-library/jest-dom';
import {render} from "@testing-library/react";
import Home from "@/app/page";

describe('home page component', () => {
    it('home page render', () => {
        const { container } = render(<Home/>);
        expect(container).toHaveTextContent(/your duties/i);
    })
})

