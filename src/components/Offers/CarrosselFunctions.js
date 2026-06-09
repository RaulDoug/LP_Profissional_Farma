export const config = (
  endValue,
  listRef,
  autoPlayRef,
  pauseTimeoutRef,
  pauseDelay,
  autoPlayDelay,
  isDragging,
  startX,
  startScrollLeft,
  listLenght,
  itemSelector
) => ({
  pauseTimeoutRef,
  autoPlayRef,
  listRef,
  endValue,
  pauseDelay,
  isDragging,
  startX,
  startScrollLeft,
  autoPlayDelay,
  listLenght,
  itemSelector
})



// Funções responsáveis pelo funcionamento das setas de avançar imagem e do autoplay das imagens
export const scrollRight = (config) => {
  const { listRef, endValue, listLenght, itemSelector } = config
  const lista = listRef.current;

  const itemWidth =
    lista.querySelector(itemSelector).offsetWidth;

  const gap = parseInt(
    window.getComputedStyle(lista).gap
  );

  const nextValue = itemWidth + gap;

  const chegouNoFim =
    lista.scrollLeft >=
    lista.scrollWidth - lista.clientWidth - listLenght;

  if (chegouNoFim) {
    lista.scrollTo({
      left: endValue,
      behavior: 'smooth',
    });
  } else {
    lista.scrollBy({
      left: nextValue,
      behavior: 'smooth',
    });
  }
};

export const scrollLeft = (config) => {
  const { listRef, listLenght, itemSelector } = config
  const lista = listRef.current;

  const itemWidth =
    lista.querySelector(itemSelector).offsetWidth;

  const gap = parseInt(
    window.getComputedStyle(lista).gap
  );

  const nextValue = itemWidth + gap;

  const chegouNoInicio = lista.scrollLeft <= listLenght;

  if (chegouNoInicio) {
    lista.scrollTo({
      left: lista.scrollWidth,
      behavior: 'smooth',
    });
  } else {
    lista.scrollBy({
      left: -nextValue,
      behavior: 'smooth',
    });
  }
};

export const iniciarAutoPlay = (config) => {
  const { autoPlayRef, autoPlayDelay } = config
  clearInterval(autoPlayRef.current);

  autoPlayRef.current = setInterval(() => {
    scrollRight(config);
  }, autoPlayDelay);
};

export const pausarAutoPlay = (config) => {
  const { autoPlayRef, pauseTimeoutRef, pauseDelay } = config
  clearInterval(autoPlayRef.current);

  clearTimeout(pauseTimeoutRef.current);

  pauseTimeoutRef.current = setTimeout(() => {
    iniciarAutoPlay(config);
  }, pauseDelay);
};

export const handleUserInteraction = (config) => {
  pausarAutoPlay(config);
};


// Funções responsáveis pelo arrasto do carrossel com o mouse
export const handleMouseDown = (e, config) => {
  const { isDragging, startX, startScrollLeft, listRef } = config
  isDragging.current = true;

  startX.current = e.pageX;

  startScrollLeft.current = listRef.current.scrollLeft;

  handleUserInteraction(config);
};

export const handleMouseMove = (e, config) => {
  const { isDragging, startX, listRef, startScrollLeft } = config
  if (!isDragging.current) return;

  const distance = e.pageX - startX.current

  listRef.current.scrollLeft = 
    startScrollLeft.current - distance;
};

export const handleMouseUp = (config) => {
  const { isDragging } = config
  isDragging.current = false;
}

// Funções responsáveis pelo arrasto do carrossel com touch
export const handleTouchStart = (e, config) => {
  const { isDragging, startX, startScrollLeft, listRef } = config;
  isDragging.current = true;

  startX.current = e.touches[0].pageX;
  startScrollLeft.current = listRef.current.scrollLeft;

  handleUserInteraction(config);
}

export const handleTouchMove = (e, config) => {
  const { isDragging, startX, listRef, startScrollLeft } = config
  if (!isDragging.current) return;

  const distance = e.touches[0].pageX - startX.current;

  listRef.current.scrollLeft = startScrollLeft.current - distance;
}

export const handleTouchEnd = (config) => {
  const { isDragging } = config
  isDragging.current = false;
}