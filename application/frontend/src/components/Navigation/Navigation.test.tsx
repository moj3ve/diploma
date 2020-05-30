import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import { Navigation } from './Navigation';

test("Navigation is rendering without errors", () => {
	const navigation = render(
		<MemoryRouter>
			<Navigation />
		</MemoryRouter>
	);
	// expect(chatLink.getByText("ChatLinkTitle")).toBeInTheDocument();
});
