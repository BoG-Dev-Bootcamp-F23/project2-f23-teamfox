import verifyUser from '../../../../server/mongodb/actions/verifyUser.js'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const email = req.body.email
            const password = req.body.password
            const result =  await verifyUser(email, password)
            return res.status(200).json(result)
        } catch (e) {
            return res.status(500).json({ status: 'invalid user info' })
        }
    }
}