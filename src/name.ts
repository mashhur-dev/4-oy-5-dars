import { Request, Response } from "express"

let resource: string = ''

export function getName(req: Request, res: Response){
    res.status(200).send(resource)
}

export function postName(req: Request, res: Response){
    resource = req.body.text
    res.status(201).send('Resource added')
}