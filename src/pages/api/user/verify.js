import verifyUser from '../../../../server/mongodb/actions/verifyUser.js'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const result =  await verifyUser(req.body)
            return res.status(200).json(result)
        } catch (e) {
            console.log(e.message.toString())
            return res.status(500).json({ status: 'Invalid user info' })
        }
    }
}