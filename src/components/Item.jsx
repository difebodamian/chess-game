import pawn_white from '../assets/peon-blanco.png'
import tower_white from '../assets/torre-blanco.png'
import horse_white from '../assets/caballo-blanco.png'
import alfil_white from '../assets/alfil-blanco.png'
import king_white from '../assets/rey-blanco.png'
import queen_white from '../assets/reina-blanco.png'
import pawn_black from '../assets/peon-negro.png'
import tower_black from '../assets/torre-negro.png'
import horse_black from '../assets/caballo-negro.png'
import alfil_black from '../assets/alfil-negro.png'
import king_black from '../assets/rey-negro.png'
import queen_black from '../assets/reina-negro.png'
import { TEAM_ONE_POSITIONS, TEAM_TWO_POSITIONS } from '../logic/index'

export const Item = ({ type, index }) => {
	const assignImg = (classType, team) => {
		if (classType === 'pawn') {
			return team === 'blackTeam' ? pawn_black : pawn_white
		} else if (classType === 'tower') {
			return team === 'blackTeam' ? tower_black : tower_white
		} else if (classType === 'horse') {
			return team === 'blackTeam' ? horse_black : horse_white
		} else if (classType === 'alfil') {
			return team === 'blackTeam' ? alfil_black : alfil_white
		} else if (classType === 'king') {
			return team === 'blackTeam' ? king_black : king_white
		} else if (classType === 'queen') {
			return team === 'blackTeam' ? queen_black : queen_white
		}
	}

	const team = TEAM_ONE_POSITIONS.includes(index)
		? 'blackTeam'
		: TEAM_TWO_POSITIONS.includes(index)
		? 'whiteTeam'
		: null
	const imgSource = assignImg(type, team)
	return (
		<div className={team}>
			<img src={imgSource} alt={type} />
		</div>
	)
}
