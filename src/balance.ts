import {Request, Response} from "express"

type Transaction = {
    amount: number
}

type User = {
    name: string
    balance: number
}

const user: User = {
    name: 'Mashhurbek',
    balance: 12000
}

export function getBalance(req: Request, res: Response){
    res.status(200).json(user)
}

export function postBalance(req: Request, res: Response){
    const transaction: Transaction = req.body

    user.balance = user.balance + transaction.amount * 0.99

    res.status(200).json('Sizning balansingiz yangilandi: ' + user.balance)
}

export function deleteBalance(req: Request, res: Response){
    user.balance = 0
    res.status(200).json('Sizning balansingiz yangilandi: ' + user.balance)
}