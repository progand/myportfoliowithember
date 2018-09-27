import Route from '@ember/routing/route';
import { PROJECTS } from '../fixtures/project';
import _ from 'lodash';

export default Route.extend({
    model(params) {
        return _.find(PROJECTS, {id: params.project_id});
    }
});
