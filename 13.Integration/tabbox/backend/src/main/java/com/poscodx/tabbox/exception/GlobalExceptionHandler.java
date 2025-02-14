package com.poscodx.tabbox.exception;

import java.io.PrintWriter;
import java.io.StringWriter;


import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.NoHandlerFoundException;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.extern.slf4j.Slf4j;

@Slf4j
@ControllerAdvice
public class GlobalExceptionHandler {
	
	@ExceptionHandler(NoHandlerFoundException.class)
	public String handlerNoHandlerFoundException(Exception e) {
		return "index";
	}
	
	@ExceptionHandler(Exception.class)
	public void handler(HttpServletRequest request, HttpServletResponse response, Exception e) throws Exception {
		// 로깅
		StringWriter errors = new StringWriter();
		e.printStackTrace(new PrintWriter(errors));
		log.error(errors.toString());
		
		// 에러 페이지 포워딩
		request.setAttribute("errors", errors.toString());
		request.getRequestDispatcher("/error/500").forward(request, response);
	}
}
