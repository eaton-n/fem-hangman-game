import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function Modal({ openModal, closeModal, text, word, showAnswer }) {
	const ref = useRef();
	const navigate = useNavigate();
	console.log(word);
	useEffect(() => {
		openModal ? ref.current?.showModal() : ref.current?.close();
	}, [openModal]);

	return (
		<dialog
			className='flex flex-col justify-center items-center w-screen my-0 mx-auto px-2 py-6 sm:p-10 lg:p-20 h-screen border-none bg-black bg-opacity-30 blur rounded-2xl'
			ref={ref}
		>
			<div className='relative bg-[#261676] p-6 w-[250px] rounded-2xl '>
				<h2 className='absolute -top-5 left-12  text-white w-auto m-0 text-4xl font-extrabold stroke-black stroke-2 '>
					{text}
				</h2>
				<div className='flex flex-col items-center gap-2'>
					{showAnswer && <span className='text-white text-2xl'>{word}</span>}
					<button
						disabled={text === 'YOU LOST' || text === 'YOU WON'}
						className='w-2/3 h-10 rounded-md bg-blue-500 text-white disabled:bg-slate-600 font-sans text-xl'
						onClick={closeModal}
					>
						RESUME
					</button>
					<button
						className='w-2/3 h-10 rounded-md bg-blue-500 text-white font-sans text-xl'
						onClick={() => navigate('/categories')}
					>
						NEW CATEGORY
					</button>
					<button
						className='w-2/3 h-10 rounded-md bg-blue-500 text-white font-sans text-xl'
						onClick={() => navigate('/')}
					>
						QUIT GAME
					</button>
				</div>
			</div>
		</dialog>
	);
}

export default Modal;
