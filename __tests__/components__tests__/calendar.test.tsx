
import '@testing-library/jest-dom';
import {render, screen} from "@testing-library/react";
import Calendar from "@/components/Calendar";
describe('calendar component', () => {
    it('calendar render without duty and duty time', () => {
        render(<Calendar dutyTime={null} duty={null}/>)
        expect(screen.queryByRole('list')).toBeNull()
    })
})

