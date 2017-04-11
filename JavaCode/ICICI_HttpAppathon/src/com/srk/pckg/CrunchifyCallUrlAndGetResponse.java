package com.srk.pckg;
	import java.io.BufferedReader;
	import java.io.InputStreamReader;
	import java.net.HttpURLConnection;
	import java.net.Proxy;
	import java.net.InetSocketAddress;
	import java.net.URL;
	import java.net.URLConnection;
	import java.net.UnknownHostException;
	import java.nio.charset.Charset;
	public class CrunchifyCallUrlAndGetResponse {
		/*public static void main(String[] args) {
			// TODO Auto-generated method stub
			//sendRequest("https://retailbanking.mybluemix.net/banking/icicibank/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369");
			System.out.println("\nOutput: \n" + callURL("https://retailbanking.mybluemix.net/banking/icicibank/listpayee?client_id=mypriya08@gmail.com&token=212c57fe7974&custid=33337369"));
		}*/
		public String callURL(String myURL) {
			System.out.println("Requeted URL:" + myURL);
			StringBuilder sb = new StringBuilder();
			//URLConnection urlConn = null;
			HttpURLConnection urlConn = null;
			InputStreamReader in = null;
			try {
				URL url = new URL(myURL);
				//Proxy proxy = new Proxy(Proxy.Type.HTTP, new InetSocketAddress("http://webproxy.wlb2.nam.nsroot.net",8080));
				urlConn =(HttpURLConnection) url.openConnection();
				String msg = urlConn.getResponseMessage();
				System.out.println(msg);
				if (urlConn != null)
					urlConn.setReadTimeout(60 * 1000);
					//urlConn.setRequestProperty("Authorization", "Basic "+"lVQdU1ZQ0dJdX6aGJJZTAYl3SDJDY0lRSFhsaDY6a2VHNHNaQVA4MmRjS‌​ks4SA==");
				if (urlConn != null && urlConn.getInputStream() != null) {
					in = new InputStreamReader(urlConn.getInputStream(),
							Charset.defaultCharset());
					BufferedReader bufferedReader = new BufferedReader(in);
					if (bufferedReader != null) {
						int cp;
						while ((cp = bufferedReader.read()) != -1) {
							sb.append((char) cp);
						}
						bufferedReader.close();
					}
				}
			in.close();
			} catch (Exception e) {
				throw new RuntimeException("Exception while calling URL:"+ myURL, e);
			} 
	 
			return sb.toString();
		}
	}

