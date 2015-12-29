import Ember from 'ember';

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

    return Ember.String.htmlSafe(`<span class="label label-${labelType}">${number}</span>`);
}

export default Ember.Helper.helper(numberLabel);
