import * as React from 'react';
import { useModal } from './Modal/';


const DEFAULT_SIZE = "small";

export const ButtonModal = ({
	ButtonComponent,
	ModalComponent,
	...props
}) => {
	const { isModalOpened, handleModalOpen, handleModalClose } = useModal();

	return (
		<React.Fragment>
			<ButtonComponent size={props.buttonSize || DEFAULT_SIZE} color="primary" onClick={handleModalOpen} disabled={props.disabled}>
				{props.title}
			</ButtonComponent>
			<ModalComponent
				isOpened={isModalOpened}
				handleClose={handleModalClose}
				{...props}
			/>
		</React.Fragment>
	);
}
