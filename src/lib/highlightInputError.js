const highlightInputError = (duration, context, emptySubmitted) => {
  context.setState({
    [emptySubmitted]: true,
  });
  setTimeout(() => {
    context.setState({
      [emptySubmitted]: false,
    });
  }, duration);
};

export const highlightInputError2000 = highlightInputError.bind(null, 2000);
