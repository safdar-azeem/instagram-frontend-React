import { gql } from '@apollo/client'
import UserFragment from '../fragments/user.fragment'

const MeQuery = gql`
	${UserFragment}
	query Me {
		me {
			...user
		}
	}
`

export default MeQuery
