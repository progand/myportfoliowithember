import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';

export function numberLabel(params/*, hash*/) {
    let number = params[0],
        labelType;
    switch (number % 6) {
        case 1:
            labelType = 'info';
            break;
        case 2:
            labelType = 'warning';
            break;
        case 3:
            labelType = 'success';
            break;
        case 4:
            labelType = 'primary';
            break;
        case 5:
            labelType = 'danger';
            break;
        default :
            labelType = 'default';
    }

    return htmlSafe(`<span class="label label-${labelType}">${number}</span>`);
}

export default buildHelper(numberLabel);
