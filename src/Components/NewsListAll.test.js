import React from 'react';
import { render, screen } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import NewsListAll from './NewsListAll';

jest.mock('axios', () => ({
    get: jest.fn(() => Promise.resolve({ data: { response: { results: [] } } })),
}));

describe('NewsListAll', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('renders without crashing', async () => {
        const responseData = {
            response: {
                results: [
                    {
                        id: 'test-news-item-1',
                        fields: {
                            headline: 'Test news item 1',
                            thumbnail: 'https://test.com/image1.png',
                        },
                    },
                    {
                        id: 'test-news-item-2',
                        fields: {
                            headline: 'Test news item 2',
                            thumbnail: 'https://test.com/image2.png',
                        },
                    },
                ],
            },
        };

        const axios = require('axios');
        axios.get.mockResolvedValue({ data: responseData });

        await act(async () => {
            render(<NewsListAll />);
        });

        const items = await screen.findAllByTestId("news-item-single-container");

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(process.env.REACT_APP_DATA_SERVICE_URL);
        expect(items).toHaveLength(2);
    });
});