



const imgUrls = ['https://pacifica.morewebsitesaboutbuildingsandfood.com/assets/img/photography/vanlake.jpg', 
'https://pacifica.morewebsitesaboutbuildingsandfood.com/assets/img/photography/nycskylinestreetov.jpg', 
'https://pacifica.morewebsitesaboutbuildingsandfood.com/assets/img/photography/evilempire.jpg', 
 'https://pacifica.morewebsitesaboutbuildingsandfood.com/assets/img/photography/scarboroughhotel.jpg',
 'https://pacifica.morewebsitesaboutbuildingsandfood.com/assets/img/photography/fileybeach.JPG' ];


class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentIndex: null };
    this.closeModal = this.closeModal.bind(this);
    this.findNext = this.findNext.bind(this);
    this.findPrev = this.findPrev.bind(this);
    this.renderImageContent = this.renderImageContent.bind(this);
  }
  renderImageContent(src, index) {
    return /*#__PURE__*/(
      React.createElement("div", { onClick: e => this.openModal(e, index) }, /*#__PURE__*/
      React.createElement("img", { src: src, key: src })));


  }
  openModal(e, index) {
    this.setState({ currentIndex: index });
  }
  closeModal(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState({ currentIndex: null });
  }
  findPrev(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex - 1 }));

  }
  findNext(e) {
    if (e != undefined) {
      e.preventDefault();
    }
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1 }));

  }
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "gallery-container" }, /*#__PURE__*/

      React.createElement("div", { className: "gallery-grid" },
      imgUrls.map(this.renderImageContent)), /*#__PURE__*/

      React.createElement(GalleryModal, {
        closeModal: this.closeModal,
        findPrev: this.findPrev,
        findNext: this.findNext,
        hasPrev: this.state.currentIndex > 0,
        hasNext: this.state.currentIndex + 1 < imgUrls.length,
        src: imgUrls[this.state.currentIndex] })));



  }}


class GalleryModal extends React.Component {
  constructor() {
    super();
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }
  componentDidMount() {
    document.body.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnMount() {
    document.body.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown(e) {
    if (e.keyCode === 27)
    this.props.closeModal();
    if (e.keyCode === 37 && this.props.hasPrev)
    this.props.findPrev();
    if (e.keyCode === 39 && this.props.hasNext)
    this.props.findNext();
  }
  render() {
    const { closeModal, hasNext, hasPrev, findNext, findPrev, src } = this.props;
    if (!src) {
      console.log('whut');
      return null;
    }
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { className: "modal-overlay", onClick: closeModal }), /*#__PURE__*/
      React.createElement("div", { isOpen: !!src, className: "modal" }, /*#__PURE__*/
      React.createElement("div", { className: "modal-body" }, /*#__PURE__*/
      React.createElement("a", { href: "#", className: "modal-close", onClick: closeModal, onKeyDown: this.handleKeyDown }, "\xD7"),
      hasPrev && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-prev", onClick: findPrev, onKeyDown: this.handleKeyDown }, "\u2039"),
      hasNext && /*#__PURE__*/React.createElement("a", { href: "#", className: "modal-next", onClick: findNext, onKeyDown: this.handleKeyDown }, "\u203A"), /*#__PURE__*/
      React.createElement("img", { src: src })))));




  }}


ReactDOM.render( /*#__PURE__*/React.createElement(Gallery, null), document.querySelector('.gallery-container'));


