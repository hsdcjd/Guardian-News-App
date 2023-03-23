import { render, screen } from '@testing-library/react';
import NewsItemSingle from './NewsItemSingle';

describe('tests for NewsItemSingle', () => {
    const mockProps = {
        thumbnail: "mock-dash-image.jpg",
        headline: "potato"
    };

    test('component NewsItemSingle renders without crashing', () => {
        render(<NewsItemSingle {...mockProps} />);

    });

    test('renders image with correct source', () => {
        render(<NewsItemSingle {...mockProps} />);
        expect(screen.getByAltText("News")).toHaveAttribute("src", mockProps.thumbnail);
    });

    test('renders heading with correct text', () => {
        render(<NewsItemSingle {...mockProps} />);
        expect(screen.getByText(mockProps.headline)).toBeInTheDocument();
    });

});

