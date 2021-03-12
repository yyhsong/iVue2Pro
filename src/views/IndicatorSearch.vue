<template>
	<div class="view">
		<el-breadcrumb separator-class="el-icon-arrow-right">
			<el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
			<el-breadcrumb-item>指标查询</el-breadcrumb-item>
		</el-breadcrumb>
		
		<div class="sel-div">
			<el-select filterable v-model="selectedStock" 
				@change="changeSel" placeholder="请选择...">
				<el-option 
					v-for="stock in stockList"
					:key="stock.code"
					:value="stock.code"
					:label="stock.code + ' ' + stock.name">
				</el-option>
			</el-select>
		</div>
		
		<el-tabs v-model="activeName" @tab-click="switchTab" style="margin-top:15px;">
	    	<el-tab-pane label="董事会结构" name="dshjg">
	    		<table class="view-t view-t-yellow">
	    			<caption>董事会独立性</caption>
	    			<tr>
	    				<th>董事会总人数</th>
	    				<td v-text="indicator.dsh_num"></td>
	    				<th>行业内董事会规模人数均值</th>
	    				<td v-text="indicator.dsh_avg_dsh_num"></td>
	    			</tr>
	    			<tr>
	    				<th>独立董事人数</th>
	    				<td v-text="indicator.dsh_dl_num"></td>
	    				<th>独立董事兼职其他上市公司独董数</th>
	    				<td v-text="indicator.dsh_dl_jr_dl"></td>
	    			</tr>
	    			<tr>
	    				<th>其他外部董事人数</th>
	    				<td v-text="indicator.dsh_qt_wb_num"></td>
	    				<th>执行董事人数</th>
	    				<td v-text="indicator.dsh_zx_num"></td>
	    			</tr>
	    			<tr>
	    				<th>董事长是否兼任其他高管</th>
	    				<td v-text="indicator.dsh_dsz_part ? '是': '否'"></td>
	    				<th>董事长是否来自大股东</th>
	    				<td v-text="indicator.dsh_dsz_is_dgd ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>董事长是否兼任党委（党组）书记</th>
	    				<td v-text="indicator.dsh_dsz_is_sj ? '是': '否'"></td>
	    				<th>兼任经理层的董事人数</th>
	    				<td v-text="indicator.dsh_jlc_num"></td>
	    			</tr>
	    			<tr>
	    				<th>董事变更次数</th>
	    				<td v-text="indicator.dsh_is_ds_change"></td>
	    				<th>是否含有党员董事</th>
	    				<td v-text="indicator.dsh_has_dy ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">多元化程度</td>
	    			</tr>
	    			<tr>
	    				<th>职工董事人数</th>
	    				<td v-text="indicator.dsh_zhg_num"></td>
	    				<th>女性董事人数</th>
	    				<td v-text="indicator.dsh_nx_num"></td>
	    			</tr>
	    			<tr>
	    				<th>外籍董事人数</th>
	    				<td v-text="indicator.dsh_wj_num"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    		</table>
	    		
	    		<table class="view-t view-t-yellow">
	    			<caption>董事会专业性</caption>
	    			<tr>
	    				<th>是否设立审计委员会</th>
	    				<td v-text="indicator.dsh_has_sj ? '是': '否'"></td>
	    				<th>委员会主任是否独董担任</th>
	    				<td v-text="indicator.dsh_sj_dd_leader ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>是否设立社会责任等其他专门委员会</th>
	    				<td v-text="indicator.dsh_hava_qt_wyh ? '是': '否'"></td>
	    				<th>法律、财务等专业独立董事人数</th>
	    				<td v-text="indicator.dsh_law_cw_num"></td>
	    			</tr>
	    			<!--<tr>
	    				<th>董事变更时间</th>
	    				<td v-text="indicator.dsh_ds_change_time"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>-->
	    			<!--<tr>
	    				<td colspan="4" class="cols">战略决策委员会</td>
	    			</tr>
	    			<tr>
	    				<th>总人数</th>
	    				<td></td>
	    				<th>独董人数</th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<th>委员会主任是否独董担任</th>
	    				<td></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">提名委员会</td>
	    			</tr>
	    			<tr>
	    				<th>总人数</th>
	    				<td></td>
	    				<th>独董人数</th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<th>委员会主任是否独董担任</th>
	    				<td></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">薪酬委员会</td>
	    			</tr>
	    			<tr>
	    				<th>总人数</th>
	    				<td></td>
	    				<th>独董人数</th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<th>委员会主任是否独董担任</th>
	    				<td></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">审计委员会</td>
	    			</tr>
	    			<tr>
	    				<th>总人数</th>
	    				<td></td>
	    				<th>独董人数</th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<th>委员会主任是否独董担任</th>
	    				<td></td>
	    				<th></th>
	    				<td></td>
	    			</tr>-->
	    		</table>
	    	</el-tab-pane>
	    	<el-tab-pane label="董事会行为" name="dshxw">
	    		<table class="view-t view-t-blue">
	    			<caption>专门委员会会议</caption>
	    			<tr>
	    				<th>召开次数</th>
	    				<td v-text="indicator.dsh_behavior_zmhy_num"></td>
	    				<th>独董出席比率</th>
	    				<td v-text="indicator.dsh_behavior_zmhy_dd_num"></td>
	    			</tr>
	    			<tr>
	    				<th>提交董事会议题数</th>
	    				<td v-text="indicator.dsh_behavior_zmhy_yt_num"></td>
	    				<th></th>
	    				<td></td>
	    				<!--<th>董事会采纳议题数</th>
	    				<td v-text="indicator.dsh_behavior_zmhy_yt_cn_num"></td>-->
	    			</tr>
	    			<!--<tr>
	    				<th>独董坐班天数</th>
	    				<td v-text="indicator."></td>
	    				<th></th>
	    				<td></td>
	    			</tr>-->
	    		</table>
	    		
	    		<table class="view-t view-t-blue">
	    			<caption>董事会会议</caption>
	    			<tr>
	    				<th>召开次数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_num"></td>
	    				<th>通讯会议次数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_tx_num"></td>
	    			</tr>
	    			<tr>
	    				<th>会议地址</th>
	    				<td v-text="indicator.dsh_behavior_dsh_areas"></td>
	    				<th>会议议题数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_yt_num"></td>
	    			</tr>
	    			<tr>
	    				<th>表决反对票数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_fd_num"></td>
	    				<th>独董亲自到会次数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_dd_num"></td>
	    			</tr>
	    			<tr>
	    				<th>独董出席比率</th>
	    				<td v-text="indicator.dsh_behavior_dsh_dd_rate"></td>
	    				<th>独董独立发表反对意见数</th>
	    				<td v-text="indicator.dsh_behavior_dsh_dd_fd_num"></td>
	    			</tr>
	    			<tr>
	    				<th>独董是否购买董事责任险</th>
	    				<td v-text="indicator.dsh_behavior_dsh_dd_zrx ? '是': '否'"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    		</table>
	    		
	    		<table class="view-t view-t-blue">
	    			<caption>股东大会</caption>
	    			<tr>
	    				<th>股东大会的董事出席率</th>
	    				<td v-text="indicator.dsh_behavior_gddh_ds_rate"></td>
	    				<th>股东大会是否采用累积投票制</th>
	    				<td v-text="indicator.dsh_behavior_gddh_ljtp ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>单独或合计10%以上股东是否能提议开临时股东会</th>
	    				<td v-text="indicator.dsh_behavior_gddh_tenpercent_support ? '是': '否'"></td>
	    				<th>单独或合计3%以上股东是否能够提出议案</th>
	    				<td v-text="indicator.dsh_behavior_gddh_threepercent_support ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>股东大会决议事项投票率</th>
	    				<td v-text="indicator.dsh_behavior_gddh_tp_rate"></td>
	    				<th>董事会决议事项反对率</th>
	    				<td v-text="indicator.dsh_behavior_gddh_fd_rate"></td>
	    			</tr>
	    		</table>
	    		
	    		<table class="view-t view-t-blue">
	    			<caption>与党委的关系</caption>
	    			<tr>
	    				<th>党建条款是否进入公司章程</th>
	    				<td v-text="indicator.dsh_behavior_dwh_contains_dj ? '是': '否'"></td>
	    				<th>党委与董事会成员是否双向进入、交叉任职</th>
	    				<td v-text="indicator.dsh_behavior_dwh_contains_dsh ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>决策程序上是否党委会前置</th>
	    				<td v-text="indicator.dsh_behavior_dwh_first ? '是': '否'"></td>
	    				<th>是否披露党委会等党组织参与治理情况</th>
	    				<td v-text="indicator.dsh_behavior_dwh_join_management ? '是': '否'"></td>
	    			</tr>
	    		</table>
	    	</el-tab-pane>
	    	<el-tab-pane label="董事薪酬、激励及约束" name="dshxc">
	    		<table class="view-t view-t-green">
	    			<caption>非独立董事薪酬与激励</caption>
	    			<tr>
	    				<th>董事上一年薪酬</th>
	    				<td v-text="indicator.dsjl_offer_last_year"></td>
	    				<th>董事本年薪酬</th>
	    				<td v-text="indicator.dsjl_offer_current_year"></td>
	    			</tr>
	    			<tr>
	    				<th>与公司净利润增幅比较</th>
	    				<td v-text="indicator.dsjl_compare_lr"></td>
	    				<th>行业董事平均薪酬</th>
	    				<td v-text="indicator.dsjl_avg_offer_current"></td>
	    				<!--<th>与公司创值增幅比较</th>
	    				<td v-text="indicator."></td>-->
	    			</tr>
	    			<tr>
	    				<th>董事持股人数</th>
	    				<td v-text="indicator.dsjl_ds_cg_num"></td>
	    				<th>总体持股比例</th>
	    				<td v-text="indicator.dsjl_cg_rate"></td>
	    			</tr>
	    			<tr>
	    				<th>平均持股比例</th>
	    				<td v-text="indicator.dsjl_avg_cg_rate"></td>
	    				<th>董事评价是否披露</th>
	    				<td v-text="indicator.dsjl_ds_pj_pl ? '是': '否'"></td>
	    				<!--<th>行业内其他公司董事累计持股平均水平</th>
	    				<td v-text="indicator."></td>-->
	    			</tr>
	    			<tr>
	    				<th>董事增持次数</th>
	    				<td v-text="indicator.dsjl_ds_zc_num"></td>
	    				<th>董事减持次数</th>
	    				<td v-text="indicator.dsjl_ds_jc_num"></td>
	    			</tr>
	    		</table>
	    		
	    		<table class="view-t view-t-green">
	    			<caption>独立董事津贴</caption>
	    			<tr>
	    				<th>独立董事上一年津贴</th>
	    				<td v-text="indicator.dsjl_dd_jt_lastyear"></td>
	    				<th>独立董事本年津贴</th>
	    				<td v-text="indicator.dsjl_dd_jt_thisyear"></td>
	    			</tr>
	    			<tr>
	    				<th>行业独立董事平均津贴</th>
	    				<td v-text="indicator.dsjl_ds_avg_jt"></td>
	    				<th></th>
	    				<td></td>
	    				<!--<th>独立董事其他激励方式</th>
	    				<td v-text="indicator."></td>-->
	    			</tr>
	    			<!--<tr>
	    				<th>持股数量</th>
	    				<td v-text="indicator."></td>
	    				<th></th>
	    				<td></td>
	    			</tr>-->
	    		</table>
	    		
	    		<table class="view-t view-t-green">
	    			<caption>董事责任</caption>
	    			<tr>
	    				<th>董事是否遭批评、谴责、禁入等处罚</th>
	    				<td v-text="indicator.dsjl_js_punish ? '是': '否'"></td>
	    				<th>信息披露是否存在资金占用、关联交易、同行业竞争等违规事项</th>
	    				<td v-text="indicator.dsjl_is_wg ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>诉讼金额</th>
	    				<td v-text="indicator.dsjl_punish_amount"></td>
	    				<th>赔偿金额</th>
	    				<td v-text="indicator.dsjl_pay_amount"></td>
	    			</tr>
	    		</table>
	    	</el-tab-pane>
	    	<el-tab-pane label="社会责任" name="shzr">
	    		<table class="view-t view-t-red">
	    			<caption>价值创造</caption>
	    			<tr>
	    				<td colspan="4" class="cols">社会</td>
	    			</tr>
	    			<tr>
	    				<th>每股社会责任值</th>
	    				<td v-text="indicator.shzr_value_perg"></td>
	    				<th>纳税总额</th>
	    				<td v-text="indicator.shzr_total_ls"></td>
	    			</tr>
	    			<tr>
	    				<th>就业人数</th>
	    				<td v-text="indicator.shzr_total_employment"></td>
	    				<th>环境保护</th>
	    				<td v-text="indicator.shzr_total_env_protect"></td>
	    			</tr>
	    			<tr>
	    				<th>扶贫或慈善投入</th>
	    				<td v-text="indicator.shzr_total_fp + indicator.shzr_total_zsjz"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">股东</td>
	    			</tr>
	    			<tr>
	    				<!--<th>创值效率</th>
	    				<td v-text="indicator."></td>-->
	    				<th>净资产收益率</th>
	    				<td v-text="indicator.shzr_roe"></td>
	    				<th>市值增值率</th>
	    				<td v-text="indicator.shzr_sz_growth_rate"></td>
	    			</tr>
	    			<tr>
	    				<th>股息率</th>
	    				<td v-text="indicator.shzr_gx_rate"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">员工</td>
	    			</tr>
	    			<tr>
	    				<th>员工收入增幅</th>
	    				<td v-text="indicator.shzr_ygsr_growth_rate"></td>
	    				<th>公司利润增幅</th>
	    				<td v-text="indicator.shzr_lr_growth_rate"></td>
	    			</tr>
	    			<tr>
	    				<th>公司人均薪酬</th>
	    				<td v-text="indicator.shzr_xc_company"></td>
	    				<th>行业平均人均薪酬</th>
	    				<td v-text="indicator.shzr_xc_avg_industry"></td>
	    			</tr>
	    			<tr>
	    				<th>是否员工持股</th>
	    				<td v-text="indicator.shzr_is_ygcg ? '是': '否'"></td>
	    				<th>是否工会发挥民主管理作用</th>
	    				<td v-text="indicator.shzr_is_gh_effect ? '是': '否'"></td>
	    			</tr>
	    			<!--<tr>
	    				<th>员工社会福利保障</th>
	    				<td v-text="indicator."></td>
	    				<th>培训投入</th>
	    				<td v-text="indicator."></td>
	    			</tr>
	    			<tr>
	    				<th>安全保障</th>
	    				<td v-text="indicator."></td>
	    				<th></th>
	    				<td></td>
	    			</tr>-->
	    			<tr>
	    				<td colspan="4" class="cols">客户</td>
	    			</tr>
	    			<tr>
	    				<th>研发占比</th>
	    				<td v-text="indicator.shzr_research_rate"></td>
	    				<th>市场份额</th>
	    				<td v-text="indicator.shzr_market_share"></td>
	    			</tr>
	    			<tr>
	    				<th>毛利率</th>
	    				<td v-text="indicator.shzr_ml_rate"></td>
	    				<th></th>
	    				<td></td>
	    				<!--<th>品牌美誉度</th>
	    				<td v-text="indicator."></td>-->
	    			</tr>
	    		</table>
	    		
	    		<table class="view-t view-t-red">
	    			<caption>外部评价</caption>
	    			<tr>
	    				<th>是否进入沪、深社会责任指数成分股</th>
	    				<td v-text="indicator.shzr_is_shzr_cfg ? '是': '否'"></td>
	    				<th>是否进入沪、深公司治理指数成分股</th>
	    				<td v-text="indicator.shzr_is_gszl_cfg ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>是否入选上市公司“金圆桌奖”</th>
	    				<td v-text="indicator.shzr_is_jyz ? '是': '否'"></td>
	    				<th>是否进入明晟指数</th>
	    				<td v-text="indicator.shzr_is_msici ? '是': '否'"></td>
	    				<!--<th>是否入选其他公司治理评奖榜单</th>
	    				<td v-text="indicator."></td>-->
	    			</tr>
	    			<tr>
	    				<th>是否上证180治理</th>
	    				<td v-text="indicator.shzr_is_sz180 ? '是': '否'"></td>
	    				<th>是否esg40股</th>
	    				<td v-text="indicator.shzr_is_esg40 ? '是': '否'"></td>
	    			</tr>
	    			<!--<tr>
	    				<th>证券研究机构跟踪家数</th>
	    				<td v-text="indicator."></td>
	    			</tr>-->
	    			<tr>
	    				<!--<th>负面新闻报道转载数</th>
	    				<td v-text="indicator.shzr_num_negative_news"></td>-->
	    				<th>监管部门警告或处罚事件数</th>
	    				<td v-text="indicator.shzr_num_warning"></td>
	    				<th></th>
	    				<td></td>
	    			</tr>
	    		</table>
	    	</el-tab-pane>
	    	<el-tab-pane label="信息披露" name="xxpl">
	    		<table class="view-t view-t-purple">
	    			<tr>
	    				<td colspan="4" class="cols">披露日期</td>
	    			</tr>
	    			<tr>
	    				<th>年报披露日期距第二年4月30日的天数</th>
	    				<td v-text="indicator.xxpl_nb_one_delay"></td>
	    				<th>半年报披露日期距7月1日的天数</th>
	    				<td v-text="indicator.xxpl_bnb_seven_delay"></td>
	    			</tr>
	    			<tr>
	    				<th>一季报披露日期距4月1日的天数</th>
	    				<td v-text="indicator.xxpl_yjd_four_delay"></td>
	    				<th>三季报披露日期距10月1日的天数</th>
	    				<td v-text="indicator.xxpl_sjd_ten_delay"></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">披露一致性</td>
	    			</tr>
	    			<tr>
	    				<th>信息披露、定期报告披露后的更正数量</th>
	    				<td v-text="indicator.xxpl_gz_num"></td>
	    				<th>业绩预告与正式公告是否一致</th>
	    				<td v-text="indicator.xxpl_predict_equal_true ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">内部控制</td>
	    			</tr>
	    			<tr>
	    				<th>内部控制文件累计数量（个）</th>
	    				<td v-text="indicator.nbkz_file_num"></td>
	    				<th>是否披露内部控制评价</th>
	    				<td v-text="indicator.nbkz_is_pl_evaluate ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>是否披露内部控制缺陷</th>
	    				<td v-text="indicator.nbkz_is_pl_defect ? '是': '否'"></td>
	    				<th>是否有效实施内部控制缺陷整改</th>
	    				<td v-text="indicator.nbkz_is_improve ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<td colspan="4" class="cols">当初审计报告意见</td>
	    			</tr>
	    			<tr>
	    				<th>标准无保留</th>
	    				<td v-text="indicator.sjbg_view_wbl ? '是': '否'"></td>
	    				<th>有保留</th>
	    				<td v-text="indicator.sjbg_view_ybl ? '是': '否'"></td>
	    			</tr>
	    			<tr>
	    				<th>拒绝发表意见</th>
	    				<td v-text="indicator.sjbg_view_jjfb"></td>
	    				<th>否定意见</th>
	    				<td v-text="indicator.sjbg_view_negative"></td>
	    			</tr>
	    		</table>
	    	</el-tab-pane>
	 	</el-tabs>
	</div>
</template>

<script>
	import IndicatorSrv from '../api/IndicatorSrv';
	import 'echarts/lib/chart/graph';
	
	export default {
	    data() {
	      return {
	      	//激活的标签页
	        activeName: 'dshjg',
	        //选中的股票代码
	        selectedStock: '',
	        //可选的股票列表
	        stockList: [],
	        //指标详情
	        indicator: {}
	      };
	    },
	    methods: {
	    	//选择股票
	    	changeSel(selectedCode) {
	    		//获取当前Vue组件对象
	    		let vm = this;
	    		IndicatorSrv.getIndicator(selectedCode).then(function(resp) {
	    			//console.log('Resp: ', resp.data);
	    			vm.indicator = resp.data;
		    	}).catch(function(err) {
		    		console.error('Axios Error: ', err);
		    	});
	    	},
	    	//切换Tab页
	      	switchTab(tab, event) {
	        	//console.log(tab, event);
	      	}
	    },
	    //钩子函数
	    created: function() {
	    	//获取当前Vue组件对象
	    	let vm = this;
	    	//获取股票列表
	    	IndicatorSrv.getStockList().then(function(resp) {
	    		//console.log('Resp: ', resp.data);
	    		vm.stockList = resp.data;
	    	}).catch(function(err) {
	    		console.error('Axios Error: ', err);
	    	});
	    }
	  };
</script>

<style scoped>
	.sel-div .el-select {width:100%;}
	.view-t {table-layout:fixed;border-collapse:collapse;margin-bottom:20px;width:100%;}
	.view-t caption {padding:10px;text-align:center;font-size:16px;font-weight:bold;}
	.view-t th,
	.view-t td {padding:10px;text-align:left;font-size:14px;font-weight:normal;border:1px solid #bbb;}
	.view-t th {background-color:#ddd;}
	.view-t-yellow th {background-color:#ffffcc;}
	.view-t-blue th {background-color:rgba(153, 204, 255, .6);}
	.view-t-green th {background-color:rgba(153, 204, 153, .6);}
	.view-t-red th {background-color:#ffcccc;}
	.view-t-purple th {background-color:#ccccff;}
	.view-t .cols {text-align:center;font-weight:bold;}
</style>