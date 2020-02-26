function getOffsetTop(element) {
    var realHeight = element.offsetTop;
    var parentNode = element.offsetParent;
    while (parentNode != null) {
        realHeight += parentNode.offsetTop;
        parentNode = parentNode.offsetParent;
    }
    return realHeight;
}