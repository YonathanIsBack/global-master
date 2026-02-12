import { Label } from '../../models/Label.js';
import StandardService from '../StandardService.js';

export default class LabelService extends StandardService {
  columnOrder = ['', 'label_name', 'label_value', 'urutan', 'isactive'];
  columnSearch = ['label_name', 'label_value', 'urutan', 'isactive'];

  constructor() {
    super(Label);
  }
}
