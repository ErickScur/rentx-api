import { Request, Response } from 'express';
import { ListSpecificationsUseCase } from './ListSpecificationsUseCase';

class ListSpecificationsController {
  constructor(private listSpecificationsuseCase: ListSpecificationsUseCase) {}
  handle(req: Request, res: Response) {
    const all = this.listSpecificationsuseCase.execute();
    return res.json(all);
  }
}

export { ListSpecificationsController };
