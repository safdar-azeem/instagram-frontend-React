import { gql } from '@apollo/client'

const UserFragment = gql`
	fragment user on User {
		id
		name
		avatar
		location
		website
		cover
		bio
		dateOfBirth
		dateCreated
		followers
		following
		posts
		totalNotifications
		totalMessages
		isVerified
	}
`

export default UserFragment
