import { Square } from './Square'

export const Board = ({ board }) => {
	return (
		<div className='board'>
			{board.map((_, index) => {
				return <Square key={index} index={index} />
			})}
		</div>
	)
}
