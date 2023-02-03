import { Item } from './Item'
import {
	WHITES,
	PAWN_POSITIONS,
	TOWER_POSITIONS,
	HORSE_POSITIONS,
	ALFIL_POSITIONS,
	KING_POSITIONS,
	QUEEN_POSITIONS,
} from '../logic/index'
import { useState } from 'react'

export const Square = ({ index }) => {
	const [selected, setSelected] = useState(false)

	const handleSelect = () => {
		setSelected(!selected)
	}

	const checkType = index => {
		if (PAWN_POSITIONS.includes(index)) {
			return 'pawn'
		} else if (TOWER_POSITIONS.includes(index)) {
			return 'tower'
		} else if (HORSE_POSITIONS.includes(index)) {
			return 'horse'
		} else if (ALFIL_POSITIONS.includes(index)) {
			return 'alfil'
		} else if (KING_POSITIONS.includes(index)) {
			return 'king'
		} else if (QUEEN_POSITIONS.includes(index)) {
			return 'queen'
		} else return ''
	}

	const type = checkType(index)
	const classNamecolor = WHITES.includes(index) ? 'white' : 'green'
	const className = `square ${index} ${classNamecolor} ${type} ${
		selected & (type != '') ? 'selected' : ''
	}`
	return (
		<div className={className} onClick={handleSelect}>
			{type ? <Item index={index} type={type} /> : null}
		</div>
	)
}
