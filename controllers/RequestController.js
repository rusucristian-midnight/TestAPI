const TestRequest = require('../models/TestRequest')

class RequestController
{
    async get(req, res)
    {
        try 
        {
            var responseJSON = '{';

            (await TestRequest.find({})).forEach((element) => responseJSON += element + ',\n')

            responseJSON += '}'

            res.status(201).json(JSON.stringify(responseJSON))
        } 
        catch (error) 
        {
            console.error("Error:", error)
            res.status(500).send({ error: 'some error' })
        }
    }

    async post(req, res)
    {
        try 
        {
            var { json } = req.body

            console.log(json)

            const response = new TestRequest({json: json})

            response.save()

            res.status(200).json({ response })
        } 
        catch (error) 
        {
            console.error("Error:", error)
            res.status(500).send({ error: 'some error' })
        }
    }
}

module.exports = new RequestController