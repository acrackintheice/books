import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import { getRepository } from "typeorm";
import { Book } from '../model/Book'

const router = Router();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/******************************************************************************
 *                      Get All books - "GET /api/books/all"
 ******************************************************************************/

router.get('/', async (_req: Request, res: Response) => {
    const bookRepository = getRepository(Book)
    const books = await bookRepository.find();
    return res.status(OK).json(books);
});


/******************************************************************************
 *                       Add One - "POST /api/books/add"
 ******************************************************************************/

router.post('/', async (req: Request, res: Response) => {
    const bookRepository = getRepository(Book)
    const book = await bookRepository.save(req.body)
    return res.status(CREATED).json({ book });
});



/******************************************************************************
 *                       Update - "PUT /api/books/update"
 ******************************************************************************/

router.put('/', async (req: Request, res: Response) => {
    const { book } = req.body;
    if (!book) {
        return res.status(BAD_REQUEST).json({
            error: 'paramMissingError',
        });
    }
    book.id = Number(book.id);
    return res.status(OK).end();
});



/******************************************************************************
 *                    Delete - "DELETE /api/books/delete/:id"
 ******************************************************************************/

router.delete('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const bookRepository = getRepository(Book)
    const book = await bookRepository.delete(id)
    return res.status(OK).json(book).end();
});



/******************************************************************************
 *                                     Export
 ******************************************************************************/

export default router;
