/*
function iniciar_animacao_elementos_scroll(offset_aparecer,offset_desaparecer) {

	$("[data-animar-scroll]").addClass("animated");

	data_animar_scroll_eh_movel = false;
	
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) data_animar_scroll_eh_movel = true;})(navigator.userAgent||navigator.vendor||window.opera);

	var scrollTop_height;

	millis_ultima_atualizacao_cache_data_animar_scroll = 0;

	$(window).on(
				   
		"scroll",	   
		function() {



			if (new Date().getTime() - millis_ultima_atualizacao_cache_data_animar_scroll > 2000) {
				
				elemento_data_animar_scroll = $("[data-animar-scroll]");
				
				elemento_data_animar_scroll.each(
				
					function() {
						
						$(this).data("data-animar-scroll-top",$(this).offset().top);
						
					}
				
				);

				elemento_data_animar_scroll.sort(
				
					function (a,b) {
						
						return $(a).data("data-animar-scroll-top") > $(b).data("data-animar-scroll-top") ? 1 : -1;
						
					}
					
				);				
				
				//N�o se pode utilizar -->>$(window).height()<<-- pois em celulares, quando se rola para baixo, a barra de ferramentas de busca � ocultada pelo navegador e -->>$(window).height()<<-- acaba n�o retornando o valor corrigido da altura da tela considerando a oculta��o da barra de ferramentas. Em dispositivos que n�o sejam m�veis n�o se deve utilizar o c�digo abaixo (e sim o "else" mais abaixo pois se pressionar F12 e a tela de desenvolvedor estiver presa na parte inferior da tela, ent�o a altura da tela retornada pelo c�digo abaixo n�o considerar� o tamanho agora reduzido da tela �til do site.
				if (data_animar_scroll_eh_movel) {
				
					altura_tela_data_animar_scroll = ((typeof window.outerHeight !== "undefined")?Math.max(window.outerHeight,$(window).height()):$(window).height());
					
				}
				else{
					
					altura_tela_data_animar_scroll = $(window).height();
					
				}
				
				millis_ultima_atualizacao_cache_data_animar_scroll = new Date().getTime();
				
			}



			scrollTop_height = $(window).scrollTop() + altura_tela_data_animar_scroll;



			elemento_data_animar_scroll.not(".data-animar-scroll-esta-animando").each(
										   
				function() {

					if (scrollTop_height + offset_desaparecer < $(this).data("data-animar-scroll-top")) {
						
						return false;
						
					}

					//N�o junte os 2 "if" abaixo pois da forma que est�a baixo, o c�digo ser� executado de forma mais otimizada.
					if ($(this).is(".data-animar-scroll-ocultou-elemento")) {
		
						if (scrollTop_height >= $(this).data("data-animar-scroll-top") + offset_aparecer) {

							$(this).removeClass("data-animar-scroll-ocultou-elemento");
					
							if (   (data_animar_scroll_eh_movel)   ||   (!$(this).is("[data-animar-scroll-aleatorio]"))   ) {
							
								(function(elemento_atual) {
									
									window.setTimeout(
									
										function() {
											
											elemento_atual.removeClass("data-animar-scroll-esta-animando");
											
										},
										parseInt(elemento_atual.css("animation-duration").replace("ms","").replace("s","000")) + 100
										
									);
									
								})($(this));
								
								$(this).addClass("data-animar-scroll-esta-animando " + $(this).attr("data-animar-scroll")).css({opacity:"1"});
								
							}
							else{
						
								(function(elemento_atual) {
						
									window.setTimeout(
													  
										function() {
						
											if (!elemento_atual.is(".data-animar-scroll-ocultou-elemento")) {
												
												window.setTimeout(
												
													function() {
														
														elemento_atual.removeClass("data-animar-scroll-esta-animando");
														
													},
													parseInt(elemento_atual.css("animation-duration").replace("ms","").replace("s","000")) + 100
													
												);
												
												elemento_atual.addClass("data-animar-scroll-esta-animando " + elemento_atual.attr("data-animar-scroll")).css({opacity:"1"});
												
											}
											
										},
										Math.floor(Math.random()*elemento_atual.attr("data-animar-scroll-aleatorio"))
										
									);
								
								})($(this));
								
							}
							
						}
				
					}
					else if (   (scrollTop_height + offset_desaparecer >= $(this).data("data-animar-scroll-top"))   &&   (scrollTop_height < $(this).data("data-animar-scroll-top"))   ) {	

						$(this).addClass("data-animar-scroll-ocultou-elemento").removeClass($(this).attr("data-animar-scroll")).css({opacity:"0"});
						
					}
				
				}
				
			);
			
		}
		
	);
	
	$(window).trigger("scroll");
	
}



function iniciar_animacao_elementos_scroll(offset_aparecer,classe_padrao_animacao) {

	$("[data-animar-scroll]").addClass(classe_padrao_animacao).data("data-animar-scroll-ultimo-inicio-animacao",0);

	data_animar_scroll_eh_movel = false;
	
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) data_animar_scroll_eh_movel = true;})(navigator.userAgent||navigator.vendor||window.opera);

	var scrollTop_height;

	millis_ultima_atualizacao_cache_data_animar_scroll = 0;

	$(window).on(
				   
		"scroll",	   
		function() {

			if (new Date().getTime() - millis_ultima_atualizacao_cache_data_animar_scroll > 2000) {
				
				elemento_data_animar_scroll = $("[data-animar-scroll]");
				
				elemento_data_animar_scroll.each(
				
					function() {
						
						//� importante utilizar "data-animar-scroll-ultimo-inicio-animacao" pois algumas anima��es, como "fadeInUp", alteram o posicionamento vertical do elemento (retornado pela fun��o "offset") durante a anima��o e n�o h� nenhum outro recurso/fun��o/vari�vel confi�vel que se possa utiizar para capturar o posicionamento vertical do elemento desconsiderando as altera��es no posicionamento do elemento realizadas pela anima��o. Algumas anima��es (como "transform") apesar de n�o alterarem diretamente o atributo CSS "top", acabam alterando o posicionamento vertical retornado por "offset". O �nico inconveniente do "hack" abaixo � que se alguma anima��o demorar mais do que 3000 ms para finalizar, o sistema poder� capturar o posicionamento vertical do elemento enquanto ele ainda estava sendo animado e isso poder� fazer com que o momento de reaparecimento do elemento na tela n�o seja conforme esperado. N�o se aconselha utilizar "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd" para detectar quando uma anima��o foi finalizada pois, nos teste que se realizou, isso n�o � confi�vel.
						if (new Date().getTime() - $(this).data("data-animar-scroll-ultimo-inicio-animacao") > 3000) {
						
							$(this).data("data-animar-scroll-top",$(this).offset().top);
							
						}
						
					}
				
				);

				//N�o se pode utilizar -->>$(window).height()<<-- pois em celulares, quando se rola para baixo, a barra de ferramentas de busca � ocultada pelo navegador e -->>$(window).height()<<-- acaba n�o retornando o valor corrigido da altura da tela considerando a oculta��o da barra de ferramentas. Em dispositivos que n�o sejam m�veis n�o se deve utilizar o c�digo abaixo (e sim o "else" mais abaixo pois se pressionar F12 e a tela de desenvolvedor estiver presa na parte inferior da tela, ent�o a altura da tela retornada pelo c�digo abaixo n�o considerar� o tamanho agora reduzido da tela �til do site.
				if (data_animar_scroll_eh_movel) {
				
					altura_tela_data_animar_scroll = ((typeof window.outerHeight !== "undefined")?Math.max(window.outerHeight,$(window).height()):$(window).height());
					
				}
				else{
					
					altura_tela_data_animar_scroll = $(window).height();
					
				}
				
				millis_ultima_atualizacao_cache_data_animar_scroll = new Date().getTime();
				
			}



			scrollTop_height = $(window).scrollTop() + altura_tela_data_animar_scroll;



			elemento_data_animar_scroll.each(
										   
				function() {

					//N�o junte os 2 "if" abaixo pois da forma que est� abaixo, o c�digo ser� executado de forma mais otimizada.
					if ($(this).is(".data-animar-scroll-ocultou-elemento")) {
	
						if (scrollTop_height >= $(this).data("data-animar-scroll-top") + offset_aparecer) {

							$(this).removeClass("data-animar-scroll-ocultou-elemento");
					
							(function(elemento_atual) {
					
								window.setTimeout(
												  
									function() {
					
										if (!elemento_atual.is(".data-animar-scroll-ocultou-elemento")) {
										
											elemento_atual.addClass(elemento_atual.attr("data-animar-scroll")).css({opacity:"1"}).data("data-animar-scroll-ultimo-inicio-animacao",new Date().getTime());
											
										}
										
									},
									(   (data_animar_scroll_eh_movel)   ||   (!elemento_atual.is("[data-animar-scroll-aleatorio]"))   )?0:Math.floor(Math.random()*elemento_atual.attr("data-animar-scroll-aleatorio"))
									
								);
							
							})($(this));					
							
						}
				
					}
					else if (scrollTop_height < $(this).data("data-animar-scroll-top")) {	

						$(this).addClass("data-animar-scroll-ocultou-elemento").removeClass($(this).attr("data-animar-scroll")).css({opacity:"0"});
						
					}
				
				}
				
			);
			
		}
		
	);
	
	$(window).trigger("scroll");
	
}
*/
function iniciar_animacao(offset_aparecer,classe_padrao_animacao) {

	$("[data-animar-scroll]").addClass(classe_padrao_animacao).data("data-animar-scroll-ultimo-inicio-animacao",0);

	data_animar_scroll_eh_movel = false;
	
	(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) data_animar_scroll_eh_movel = true;})(navigator.userAgent||navigator.vendor||window.opera);

	var scrollTop_height;

	millis_ultima_atualizacao_cache_data_animar_scroll = 0;

	$(window).on(
				   
		"scroll",	   
		function() {

			if (new Date().getTime() - millis_ultima_atualizacao_cache_data_animar_scroll > 2000) {
				
				elemento_data_animar_scroll = $("[data-animar-scroll]");
				
				elemento_data_animar_scroll.each(
				
					function() {
						
						//� importante utilizar "data-animar-scroll-ultimo-inicio-animacao" pois algumas anima��es, como "fadeInUp", alteram o posicionamento vertical do elemento (retornado pela fun��o "offset") durante a anima��o e n�o h� nenhum outro recurso/fun��o/vari�vel confi�vel que se possa utiizar para capturar o posicionamento vertical do elemento desconsiderando as altera��es no posicionamento do elemento realizadas pela anima��o. Algumas anima��es (como "transform") apesar de n�o alterarem diretamente o atributo CSS "top", acabam alterando o posicionamento vertical retornado por "offset". O �nico inconveniente do "hack" abaixo � que se alguma anima��o demorar mais do que 3000 ms para finalizar, o sistema poder� capturar o posicionamento vertical do elemento enquanto ele ainda estava sendo animado e isso poder� fazer com que o momento de reaparecimento do elemento na tela n�o seja conforme esperado. N�o se aconselha utilizar "transitionend MSTransitionEnd webkitTransitionEnd oTransitionEnd animationend webkitAnimationEnd" para detectar quando uma anima��o foi finalizada pois, nos teste que se realizou, isso n�o � confi�vel.
						if (new Date().getTime() - $(this).data("data-animar-scroll-ultimo-inicio-animacao") > 3000) {
						
							$(this).data("data-animar-scroll-top",$(this).offset().top);
							
						}
						
					}
				
				);

				elemento_data_animar_scroll.sort(
				
					function (a,b) {
						
						return $(a).data("data-animar-scroll-top") > $(b).data("data-animar-scroll-top") ? 1 : -1;
						
					}
					
				);
				
				elemento_data_animar_scroll_reverso = $(elemento_data_animar_scroll.get().reverse());
				
				//N�o se pode utilizar -->>$(window).height()<<-- pois em celulares, quando se rola para baixo, a barra de ferramentas de busca � ocultada pelo navegador e -->>$(window).height()<<-- acaba n�o retornando o valor corrigido da altura da tela considerando a oculta��o da barra de ferramentas. Em dispositivos que n�o sejam m�veis n�o se deve utilizar o c�digo abaixo (e sim o "else" mais abaixo pois se pressionar F12 e a tela de desenvolvedor estiver presa na parte inferior da tela, ent�o a altura da tela retornada pelo c�digo abaixo n�o considerar� o tamanho agora reduzido da tela �til do site.
				if (data_animar_scroll_eh_movel) {
				
					altura_tela_data_animar_scroll = ((typeof window.outerHeight !== "undefined")?Math.max(window.outerHeight,$(window).height()):$(window).height());
					
				}
				else{
					
					altura_tela_data_animar_scroll = $(window).height();
					
				}
				
				millis_ultima_atualizacao_cache_data_animar_scroll = new Date().getTime();
				
			}



			scrollTop_height = $(window).scrollTop() + altura_tela_data_animar_scroll;

			elemento_data_animar_scroll.filter(".data-animar-scroll-ocultou-elemento").each(

				function() {

					if (scrollTop_height >= $(this).data("data-animar-scroll-top") + offset_aparecer) {

						$(this).removeClass("data-animar-scroll-ocultou-elemento");
				
						(function(elemento_atual) {
				
							window.setTimeout(
											  
								function() {
				
									if (!elemento_atual.is(".data-animar-scroll-ocultou-elemento")) {
									
										elemento_atual.addClass(elemento_atual.attr("data-animar-scroll")).css({opacity:"1"}).data("data-animar-scroll-ultimo-inicio-animacao",new Date().getTime());
										
									}
									
								},
								(   (data_animar_scroll_eh_movel)   ||   (!elemento_atual.is("[data-animar-scroll-aleatorio]"))   )?0:Math.floor(Math.random()*elemento_atual.attr("data-animar-scroll-aleatorio"))
								
							);
						
						})($(this));					
						
					}
					else{
						
						return false;
						
					}
		
				}
			);
		
			elemento_data_animar_scroll_reverso.not(".data-animar-scroll-ocultou-elemento").each(
			
				function() {

					if (scrollTop_height <= $(this).data("data-animar-scroll-top")) {	

						$(this).addClass("data-animar-scroll-ocultou-elemento").removeClass($(this).attr("data-animar-scroll")).css({opacity:"0"});
						
					}
					else{
						
						return false;
						
					}
				
				}
				
			);
			
		}
		
	);
	
	$(window).trigger("scroll");
	
}