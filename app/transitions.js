export default function () {
    this.transition(
        this.fromRoute('index'),
        this.use('toLeft'),
        this.reverse('toRight')
    );
    this.transition(
        this.fromRoute('technology'),
        this.toRoute('project'),
        this.use('toLeft')
    );
    this.transition(
        this.fromRoute('project'),
        this.toRoute('technology'),
        this.use('toLeft')
    );
}