export default (editor, config = {}) => {
    var panelManager = editor.Panels;

    panelManager.addButton('options', {
        id: 'cleanBtn',
        className: 'fa fa-trash',
        command: 'canvas-clear',
        attributes: {title: config.cleanBtnTitle}
    });
}
