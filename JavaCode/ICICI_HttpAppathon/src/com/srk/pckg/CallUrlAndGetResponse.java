package com.srk.pckg;

import java.io.IOException;
import java.io.*;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet implementation class CallUrlAndGetResponse
 */
//@WebServlet("/CallUrlAndGetResponse")
public class CallUrlAndGetResponse extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CallUrlAndGetResponse() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		System.out.println("Hi..!");
		//PrintWriter out= response.getWriter();
		//out.println("Hi..");
		CrunchifyCallUrlAndGetResponse crunchifyCallUrlAndGetResponse = new CrunchifyCallUrlAndGetResponse();
		String outputResponse = crunchifyCallUrlAndGetResponse.callURL("https://retailbanking.mybluemix.net/banking/icicibank/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369");
		PrintWriter out= response.getWriter();
		out.println(outputResponse);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

}
