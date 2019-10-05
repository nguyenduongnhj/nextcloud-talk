/**
 * @copyright Copyright (c) 2019 Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @author Marco Ambrosini <marcoambrosini@pm.me>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import axios from 'nextcloud-axios'
import { generateOcsUrl } from 'nextcloud-router'

/**
 * Fetches the conversations from the server.
 */
const fetchConversations = async function() {
	try {
		const response = await axios.get(generateOcsUrl('apps/spreed/api/v1', 2) + 'room')
		return response
	} catch (error) {
		console.debug('Error while fetching conversations: ', error)
	}
}

/**
 * Fetches possible conversations
 * @param {String} searchText The string that will be used in the search query
 */
const searchPossibleConversations = async function(searchText) {
	try {
		const response = await axios.get(generateOcsUrl('core/autocomplete', 2) + `get` + `?format=json` + `&search=${searchText}` + `&itemType=call` + `&itemId=new` + `&shareTypes[]=${OC.Share.SHARE_TYPE_USER}&shareTypes[]=${OC.Share.SHARE_TYPE_GROUP}`)
		return response
	} catch (error) {
		console.debug('Error while searching possible conversations: ', error)
	}
}

export { fetchConversations, searchPossibleConversations }
