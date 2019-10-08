package com.platform.dao;

import com.platform.dto.ProductAttrInfo;
import org.apache.ibatis.annotations.Param;

import java.util.List;

/**
 * 自定义商品属性Dao
 * Created by wulinhao on 2019/5/23.
 */
public interface PmsProductAttributeDao {
    List<ProductAttrInfo> getProductAttrInfo(@Param("id") Long productCategoryId);
}
