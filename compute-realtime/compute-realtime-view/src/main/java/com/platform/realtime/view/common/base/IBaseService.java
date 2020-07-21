package com.platform.realtime.view.common.base;


public interface IBaseService<T> {
	    int deleteByPrimaryKey(Integer id);

	    int insert(T record);

	    int insertSelective(T record);

	    T selectByPrimaryKey(Integer id);

	    int updateByPrimaryKeySelective(T record);

	    int updateByPrimaryKey(T record);

}

